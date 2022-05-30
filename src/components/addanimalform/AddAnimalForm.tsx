/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnimal } from '../../features/animalSlice';
import styles from './AddAnimalForm.module.scss';

type AddAnimalFormProps = {
    onClose: () => void
    closeButton: () => void
    animalSpecies: string[]
}

const AddAnimalForm:FC<AddAnimalFormProps> = ({ onClose, animalSpecies, closeButton }) => {
  // States
  const [animalName, setAnimalName] = useState('');
  const [animalImg, setAnimalImg] = useState('');
  const [animalSpecie, setAnimalSpecie] = useState('');

  const dispatch = useDispatch();

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.close}>
          <button
            onClick={() => closeButton()}
            className={styles.closeBtn}
          >
            X

          </button>
        </div>
        <h2 className={styles.head}>Add Animal</h2>
        <div className={styles.wrapper}>
          <label htmlFor="name">
            Name
            <input
              id="name"
              className={styles.input}
              value={animalName}
              onChange={(e) => setAnimalName(e.target.value)}
              type="text"
              placeholder="Animal name"
            />

          </label>
          <label htmlFor="img">
            Image Src
            <input
              id="img"
              className={styles.input}
              type="text"
              placeholder="Animal image link"
              value={animalImg}
              onChange={(e) => setAnimalImg(e.target.value)}
            />
          </label>
          <label htmlFor="specie">
            Specie
            <input
              id="specie"
              className={styles.input}
              type="text"
              placeholder="Specie"
              value={animalSpecie}
              onChange={(e) => setAnimalSpecie(e.target.value)}
            />
          </label>
          <select
            className={styles.select}
            defaultValue="default"
            onChange={(e) => setAnimalSpecie(e.target.value)}
          >
            <option value="default" hidden>Species</option>
            {animalSpecies.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className={styles.button}>
          <button
            className={styles.btn}
            disabled={!animalImg || !animalName || !animalSpecie}
            onClick={() => {
              dispatch(addAnimal({
                name: animalName,
                specie: animalSpecie,
                imgSrc: animalImg,
              }));
              setAnimalImg('');
              setAnimalName('');
              setAnimalSpecie('');
              onClose();
            }}
          >
            Add

          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAnimalForm;
