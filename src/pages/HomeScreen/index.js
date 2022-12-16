import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container } from './styled';

import Header from '../../components/Header';

export default () => {
    const [headerSearch, setHeaderSearch] = useState('')

    const history = useHistory();

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch}/>
        </Container>
    );
}