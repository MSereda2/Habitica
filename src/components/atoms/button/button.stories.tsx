import React from 'react';
import { Button } from './button.component';

export const Primary: React.VFC<{}> = () => <Button text='Создать команду' size='sm' type='primary' />

export default {
    title: 'Buttons',
    component: Primary
}