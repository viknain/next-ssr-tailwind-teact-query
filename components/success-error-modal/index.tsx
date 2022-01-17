import * as React from 'react'
import styles from './modal.module.scss'

type Props = {
  onClick?: () => void
  title: string
  description: string
  btnText: string
}

const HomePageModal: React.FC<Props> = ({
  title,
  description,
  btnText,
  onClick
}) => {
  return (
    <>
      <div className={`${styles.errormodal}`}>
        <div className={`${styles.modaloverlay}`}>
          <div className={`${styles.modal}`}>
            <div className={`${styles.modalbody}`}>
              <h2>{title}</h2>
              <p className={styles.succmsg_home}>
                {description}
              </p>
              <p onClick={onClick} className={styles.ctaBtn}>
                {btnText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePageModal
