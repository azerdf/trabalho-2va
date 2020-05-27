import * as ACTION_TYPES_JOGADORES from './actionTypes/jogadoresActionTypes'
import api from '../../dbConnection/api'
import { useHistory } from 'react-router-dom';

export const listarJogadoresBegin = () => {
    return {
        type: ACTION_TYPES_JOGADORES.LISTA_JOGADORES_BEGIN
    }
}

export const listarJogadoresSuccess = (jogadores) => {
    return {
        type: ACTION_TYPES_JOGADORES.LISTA_JOGADORES_SUCCESS,
        payload: { jogadores }
    }
}

export const listarJogadoresFailure = (error) => {
    return {
        type: ACTION_TYPES_JOGADORES.LISTA_JOGADORES_FAILURE,
        payload: { error }
    }
}

export const gravarJogadorSuccess = () => {
    return {
        type: ACTION_TYPES_JOGADORES.GRAVAR_JOGADOR_SUCCESS
    }
}

export const gravarJogadorFailure = (error) => {
    return {
        type: ACTION_TYPES_JOGADORES.GRAVAR_JOGADOR_SUCCESS,
        payload: { error }
    }
}
export function listarJogadores() {
    return dispatch => {
        dispatch(listarJogadoresBegin())

        api.get('/players')
            .then(response => {
                console.log(response);

                dispatch(listarJogadoresSuccess(response.data))
            })
            .catch(error => {
                dispatch(listarJogadoresFailure(error))
            })
    }
}

// TODO: implementar função de busca de jogador
export function buscarJogador(id) {

}

export function gravarJogador(data, props) {
    data.team_id = 1;
    console.log(data);
    console.log(props);
    
    

    api.post('/players', data)
        .then(response => {
            console.log(response);
            props.history.goBack();
        })
        .catch(error => {
            console.log(error);

        })


}

export function excluirJogador(id) {

    api.delete(`/players/${id}'`)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);

        })



}