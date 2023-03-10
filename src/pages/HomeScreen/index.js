import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea, CategoryList } from './styled';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';

export default () => {
    const [headerSearch, setHeaderSearch] = useState('')
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)

    const history = useHistory();

    useEffect(() => {
        const getCategories = async () => {
            const allCategories = await api.getCategories()
            if (allCategories.error === '') {
                setCategories(allCategories.result)
            }

        }

        getCategories()
    }, [])

    useEffect(() => {
        
    }, [activeCategory])

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.length > 0 &&
                <>
                    <CategoryArea>
                        Selecione uma categoria
                        <CategoryList>
                            <CategoryItem data={{
                                id: 0,
                                title: 'Todas as categorias',
                                image: '/assets/food-and-restaurant.png'
                            }}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />

                            {categories.map((item, index) =>
                                <CategoryItem
                                    key={index}
                                    data={item}
                                    activeCategory={activeCategory}
                                    setActiveCategory={setActiveCategory}
                                />
                            )}
                        </CategoryList>
                    </CategoryArea>
                </>
            }
        </Container>
    );
}