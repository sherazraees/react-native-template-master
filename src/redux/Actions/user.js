export const sayHello = () => ({type: 'SET_USER', payload: 'Sheraz Raees'});

export const getLogin = data => ({type: loginUser.REQUEST, payload: data});

export const clearUserReducer = () => ({type: 'CLEAR'});

export const clearAssignment = () => ({type: 'CLEAR_ASSIGNMENT'});
