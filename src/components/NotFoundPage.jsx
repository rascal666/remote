// src/components/NotFoundPage.jsx (или где-то еще, где вы храните компоненты)
import React from 'react';

const NotFoundPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404</h1>
            <p>Извините, страница не найдена.</p>
            <p>Вернуться на <a href="/">главную</a>.</p>
        </div>
    );
};

export default NotFoundPage;
