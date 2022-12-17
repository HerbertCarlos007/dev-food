import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container } from './styled';

import api from '../../api';

import Header from '../../components/Header';

export default () => {
    const [headerSearch, setHeaderSearch] = useState('')
    const history = useHistory();

    useEffect(() => {
        const getCategories = async () => {
            const categories = await api.getCategories()
            console.log(categories)
        }

        getCategories()
    }, [])

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
        </Container>
    );
}