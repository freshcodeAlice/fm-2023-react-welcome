import CONSTANSTS from "../constants";
const {ACTIONTYPES} = CONSTANSTS;

export const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: new Date(),
    isFetching: false,
    error: null
}


/* Редьюсер - ЧИСТА ФУНКЦІЯ
1. Детермінована - за одних і тих вхідних даних має повертати одне і те саме значення
(РЕДЬЮСЕР НІКОЛИ НЕ МУТУЄ ОБ'ЄКТ СТАНУ)
2. Без побічних ефектів  
(НІКОЛИ НЕ РОБИМО ЗАПИТІВ НА СЕРВЕР)
*/


export function reducer(state, action) {
    switch (action.type) {
        case 'firstName':
        case 'lastName':
        case 'email':
        case 'password': {
            return {
                ...state,
                [action.type]: action.value
            }
        }
        case 'birthday':{
            return {
                ...state,
                birthday: new Date(action.value)
            }
        }
        case ACTIONTYPES.RESET_FORM: {
            return {...initialState}
        }
        case ACTIONTYPES.AUTOCOMPLETE_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case ACTIONTYPES.AUTOCOMPLETE_SUCCESS: {
            return {
                ...state,
                ...action.value,
                birthday: new Date(action.value.birthday),
                isFetching: false,
            }
        }
        case ACTIONTYPES.AUTOCOMPLETE_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }

        default:
            return state;
    }


    // Повертає новий об'єкт стану
}