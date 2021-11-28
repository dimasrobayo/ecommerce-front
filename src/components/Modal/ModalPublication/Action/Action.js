import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_LIKE, DELETE_LIKE, IS_LIKE, COUNT_LIKE, ADD_NOT_LIKE, DELETE_NOT_LIKE, IS_NOT_LIKE, COUNT_NOT_LIKE } from '../../../../gql/like';
import './Action.scss';

export default function Action(props) {
    const { publication } = props;
    const [loadingAction, setLoadingAction] = useState(false);
    const [loadingNotAction, setLoadingNotAction] = useState(false);
    const [ addLike ] = useMutation(ADD_LIKE);
    const [ deleteLike ] = useMutation(DELETE_LIKE);
    const [ addNotLike ] = useMutation(ADD_NOT_LIKE);
    const [ deleteNotLike ] = useMutation(DELETE_NOT_LIKE);

    const {data, loading, refetch} = useQuery(IS_LIKE, {
        variables: {
            idPublication: publication.id,
        }
    });
    const {data: dataCount, loading: loadingCount , refetch: refetchCount} = useQuery(COUNT_LIKE, {
        variables: {
            idPublication: publication.id
        }
    })
    const {data: dataNotLike, loading: loadingNotLike, refetch: refetchNotLike} = useQuery(IS_NOT_LIKE, {
        variables: {
            idPublication: publication.id,
        }
    });
    const {data: dataCountNotLike, loading: loadingCountNotLike , refetch: refetchCountNotLike} = useQuery(COUNT_NOT_LIKE, {
        variables: {
            idPublication: publication.id
        }
    })    

    const onAddLike = async() => {
        setLoadingAction(true);
        try {
            await addLike({
                variables: {
                    idPublication: publication.id
                }
            });
            refetch();
            refetchCount();
            refetchNotLike();
            refetchCountNotLike();
        } catch (error) {
            console.log(error)
        }
        setLoadingAction(false);
    };

    const onDeleteLike = async() => {
        setLoadingAction(true);
        try {
            await deleteLike({
                variables: {
                    idPublication: publication.id
                }
            });
            refetch();
            refetchCount();
            refetchNotLike();
            refetchCountNotLike();
        } catch (error) {
            console.log(error);
        }
        setLoadingAction(false);
    };

    const onAction = () => {
        if(!loadingAction){
            if(isLike){
                onDeleteLike();
            }else{
                onDeleteNotLike();
                onAddLike();
            }
        }
    }

    const onAddNotLike = async() => {
        setLoadingNotAction(true);
        try {
            await addNotLike({
                variables: {
                    idPublication: publication.id
                }
            });
            refetch();
            refetchCount();
            refetchNotLike();
            refetchCountNotLike();
        } catch (error) {
            console.log(error)
        }
        setLoadingNotAction(false);
    };

    const onDeleteNotLike = async() => {
        setLoadingNotAction(true);
        try {
            await deleteNotLike({
                variables: {
                    idPublication: publication.id
                }
            });
            refetch();
            refetchCount();
            refetchNotLike();
            refetchCountNotLike();
        } catch (error) {
            console.log(error);
        }
        setLoadingNotAction(false);
    };

    const onNotAction = () => {
        if(!loadingNotAction){
            if(isNotLike){
                onDeleteNotLike();
            }else{
                onDeleteLike();
                onAddNotLike();
            }
        }
    }

    if(loading || loadingCount || loadingNotLike || loadingCountNotLike) return null;
    const { isLike } = data;
    const { countLikes } = dataCount;
    const { isNotLike } = dataNotLike;
    const { countNotLikes } = dataCountNotLike;

    return (
        <div className="actions">
            <Icon 
                className={ isLike ? "like active" : "like"}
                name={ isLike ? "thumbs up" : "thumbs up outline"}
                onClick={ onAction } 
            />
            {countLikes} {countLikes === 1 ? "Like" : "Likes"}

            <Icon 
                className={ isNotLike ? "not-like active" : "not-like"}
                name={ isNotLike ? "thumbs down" : "thumbs down outline"}
                onClick={ onNotAction } 
            />
            { countNotLikes } { countNotLikes <= 1 ? "Not Like" : "Not Likes"}
        </div>
    )
}
