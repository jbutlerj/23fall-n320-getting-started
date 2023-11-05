import React from 'react';
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Exhibit from '@/components/Exhibit';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero heroImage='/hero.jpeg' height='500px' />
      <h1 className={styles.headerStyling}>Welcome to the City Aquarium</h1>
      <div className={styles.textContainer}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet tincidunt pharetra. Nullam maximus leo magna, non mattis elit hendrerit eu. Nulla at lobortis risus. Cras hendrerit bibendum nulla at accumsan. Mauris quis purus sit amet ex elementum bibendum. Praesent porttitor auctor arcu, sit amet tristique risus iaculis non. Suspendisse eu rutrum est, eu vestibulum orci. Etiam vitae purus egestas, mattis sem vitae, bibendum justo. Phasellus diam mauris, volutpat quis commodo hendrerit, iaculis sit amet nulla. Mauris sed orci quam. Mauris eget rutrum purus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet tincidunt pharetra. Nullam maximus leo magna, non mattis elit hendrerit eu. Nulla at lobortis risus. Cras hendrerit bibendum nulla at accumsan. Mauris quis purus sit amet ex elementum bibendum. Praesent porttitor auctor arcu, sit amet tristique risus iaculis non. Suspendisse eu rutrum est, eu vestibulum orci. Etiam vitae purus egestas, mattis sem vitae, bibendum justo. Phasellus diam mauris, volutpat quis commodo hendrerit, iaculis sit amet nulla. Mauris sed orci quam. Mauris eget rutrum purus.</p>
      </div>
      <Exhibit imageURL='/dolphin.jpeg' header='Dolphins' dates='June 21 - July 17' information='Cras hendrerit bibendum nulla at accumsan. Mauris quis purus sit amet ex elementum bibendum. Praesent porttitor auctor arcu, sit amet tristique risus iaculis non.' />
      <Exhibit imageURL='/penguin.jpeg' header='Penguins' dates='July 18 - August 14' information='Cras hendrerit bibendum nulla at accumsan. Mauris quis purus sit amet ex elementum bibendum. Praesent porttitor auctor arcu, sit amet tristique risus iaculis non.' />
      <Exhibit imageURL='/seahorse.jpeg' header='Seahorses' dates='August 15 - September 9' information='Cras hendrerit bibendum nulla at accumsan. Mauris quis purus sit amet ex elementum bibendum. Praesent porttitor auctor arcu, sit amet tristique risus iaculis non.' />
    </>
  )
}