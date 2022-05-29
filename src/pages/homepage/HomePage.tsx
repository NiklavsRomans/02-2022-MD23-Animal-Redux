import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import AddAnimalForm from '../../components/addanimalform/AddAnimalForm';
import AnimalCard from '../../components/animalcard/AnimalCard';
import './HomePage.scss';

const HomePage = () => {
  const animals = useSelector((state: RootState) => state.animal);
  const [activeForm, setActiveForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredAnimalData = () => {
    if (activeFilter === 'All') {
      return animals;
    }
    return animals.filter((item) => item.specie === activeFilter);
  };

  const uniqueAnimalSpecies = animals.map((item) => item.specie)
    .filter((item, index, arr) => index === arr.indexOf(item));

  useEffect(() => {
    localStorage.setItem('animals', JSON.stringify(animals));
    localStorage.clear();
  }, [animals]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="content">
            <div className="animal-head">
              {animals.length === 0 && (
              <h1>No animals Found</h1>
              )}
            </div>
            <div className="animal-button">
              {activeForm === false && (
                <button className="add-btn" onClick={() => (setActiveForm(true))}>Add animal</button>
              )}
            </div>
            {animals.length > 0 && (
              <div className="animal-species-filter">
                {['All', ...uniqueAnimalSpecies].map((item) => (
                  <button className="filter-btn" onClick={() => setActiveFilter(item)} key={item}>{item}</button>
                ))}
              </div>
            )}
            <div className="animal-form">
              {activeForm && (
              <AddAnimalForm
                animalSpecies={uniqueAnimalSpecies}
                closeButton={() => {
                  setActiveForm(false);
                }}
                onClose={() => {
                  setActiveForm(false);
                }}
              />
              )}
            </div>
            <div className="animal-list">
              {animals.length > 0 && (
                filteredAnimalData().map(({ name, imgSrc, specie }) => (
                  <AnimalCard
                    name={name}
                    specie={specie}
                    imageSrc={imgSrc}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
