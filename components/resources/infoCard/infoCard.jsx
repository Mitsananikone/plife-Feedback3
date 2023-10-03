import React from 'react';
import styles from './infoCard.module.css';
import Image from 'next/image';
import Head from 'next/head';

const InfoCard = ({ imageUrl, description, style, onClick, className }) => (
    <div style={style} className={styles.iCard}>
      <Head>
            <link rel="preload" href={imageUrl} as="image" />
        </Head>
        <div onClick={onClick}>
            <div className={styles.imgContainer}>
            <Image
                    src={imageUrl}
                    alt={description}
                    layout="fill" // or "responsive" based on your requirement
                    objectFit="cover" // adjust this value based on your design needs
                    className={styles.iCardImage}
                />
            </div>
            <div className={styles.iCardTitle}>
                <p>
                    {description}
                </p>
            </div>
        </div>
    </div>
)

export default InfoCard;
