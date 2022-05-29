import { FC } from 'react';
import styles from './AnimalCard.module.scss';

type AnimalCardProps = {
    name: string
    specie: string
    imageSrc: string
}

const AnimalCard:FC<AnimalCardProps> = ({
  name, specie, imageSrc,
}) => {
  const a = 5;

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img className={styles.img} src={imageSrc} alt="not found" />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.para}>{specie}</p>
      </div>
    </div>
  );
};

export default AnimalCard;
