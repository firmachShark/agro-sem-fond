import React from 'react'
import { concatClass } from 'utils/concatClass'
import styles from './BankDetails.module.scss'

export const BankDetails = ({
    className,
    ...props
}: React.HTMLProps<HTMLDivElement>) => {
    return (
        <div className={concatClass([className, styles.details])} {...props}>
            <div className={styles.inner}>
                <h3>Банковские реквизиты ООО «АгроСемФонд»</h3>
                <div>
                    <p>
                        Юридический и почтовый адрес: 603108, г. Н.Новгород, ул.
                    </p>
                    <p>
                        Знаменская , д.1 ${`"Б"`} ИНН 5257148382 КПП 525701001
                        БИК
                    </p>
                    <p>
                        042202603 ОГРН 1145257005740 Р/сч 40702810942000007919 в
                    </p>
                    <p>
                        Дополнительном офисе № 9042/048 Волго-Вятского Банка ОАО
                    </p>
                    <p>«Сбербанк России» г. Нижний Новгород</p>
                </div>
            </div>
        </div>
    )
}
