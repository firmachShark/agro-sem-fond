import { PHONE, PHONE_ATTR } from 'src/constants/info'
import { PhoneIcon } from 'src/image_export/header'
import Image from 'next/image'
import React from 'react'
import styles from './Common.module.scss'

interface PhoneProps {
    onlyNumber?: boolean
}

export const Phone: React.FC<PhoneProps> = ({ onlyNumber }) => {
    return (
        <a href={PHONE_ATTR} className={styles.phone}>
            <Image src={PhoneIcon} alt="phone" />
            <span>
                <b>{PHONE}</b>
                {!onlyNumber && 'Бесплатно по Беларуси'}
            </span>
        </a>
    )
}
