import './charList.scss';

import MarvelService from '../../services/MarvelService';
import { Component } from 'react/cjs/react.development';

import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner/spinner';




class CharList extends Component {

    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService();


    componentDidMount() {
        this.updateChar();
    }

    onCharLoaded = (char) => {
        this.setState({ char, loading: false })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }




    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

        // const idarr = [...Array(9)].map(() => Math.floor(Math.random() * (1011400 - 1011000) + 1011000))



        
            this.marvelService
                .getCharacter(id)
                .then(this.onCharLoaded)
                .catch(this.onError);
        


    }



    render() {
        const { char, loading, error } = this.state
        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View char={char} /> : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}

                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}


const View = ({ char }) => {
    const { name, thumbnail } = char;
    let classImg = `randomchar__img`

    if (thumbnail === `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg`) {
        classImg = `randomchar__noimg`
    }
    else {
        classImg = `randomchar__img`
    }

    return (
        <ul className="char__grid">
            <li className="char__item">
                <img src={thumbnail} alt="Random character" className={classImg} />
                <div className="char__name">{name}</div>
            </li>
            <li className="char__item">
                <img src={thumbnail} alt="Random character" className={classImg} />
                <div className="char__name">{name}</div>
            </li>
            <li className="char__item">
                <img src={thumbnail} alt="Random character" className={classImg} />
                <div className="char__name">{name}</div>
            </li>
            <li className="char__item">
                <img src={thumbnail} alt="Random character" className={classImg} />
                <div className="char__name">{name}</div>
            </li>
            <li className="char__item">
                <img src={thumbnail} alt="Random character" className={classImg} />
                <div className="char__name">{name}</div>
            </li>
            <li className="char__item">
                <img src={thumbnail} alt="Random character" className={classImg} />
                <div className="char__name">{name}</div>
            </li>
            <li className="char__item">
                <img src={thumbnail} alt="Random character" className={classImg} />
                <div className="char__name">{name}</div>
            </li>
            <li className="char__item">
                <img src={thumbnail} alt="Random character" className={classImg} />
                <div className="char__name">{name}</div>
            </li>
            <li className="char__item">
                <img src={thumbnail} alt="Random character" className={classImg} />
                <div className="char__name">{name}</div>
            </li>
        </ul>
    )
}


export default CharList;