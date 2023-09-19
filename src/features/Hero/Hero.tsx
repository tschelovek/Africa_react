import React from "react"
import styles from "./hero.module.css"

interface IHeroProps {
  children?: React.ReactNode
}

export function Hero({ children }: IHeroProps) {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__text}>
            <h1 className={styles.title_h1}>Русский язык для всех в Африке</h1>
            <p>
              Начни путешествие в мир русского языка вместе с Первым
              университетом России!
            </p>
            <div className={styles.hero__button__wrapper}>
              <button className={styles.btn}>Начать обучение</button>
            </div>
          </div>
          <div className={styles.hero__map__wrapper}>{children}</div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis
            quidem unde! Accusamus animi aspernatur beatae consequatur
            consequuntur cupiditate deleniti dicta dolore doloremque dolorum
            eius enim error explicabo, harum itaque iusto labore magni modi
            necessitatibus nisi perspiciatis possimus quaerat reiciendis rem
            repudiandae saepe sed sequi similique sit sunt suscipit tempore
            totam, ullam vel velit vero voluptate. Asperiores aspernatur
            consequatur cum eum eveniet itaque laboriosam libero perspiciatis
            quis sed. Accusamus consequuntur cumque esse hic impedit incidunt
            iste non? Aliquid distinctio dolorum inventore minima odio
            praesentium quod sequi similique? Aspernatur cupiditate doloremque
            facere iste obcaecati. Accusantium adipisci alias asperiores
            aspernatur commodi consequatur dicta ea earum esse exercitationem
            facilis fugiat, ipsa itaque, laboriosam molestiae omnis pariatur
            provident quaerat quasi quidem ratione repellendus saepe sed sequi
            similique!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            eum facere facilis itaque minus nam nostrum praesentium quidem
            similique voluptatem! Alias atque commodi cum, dolor earum quasi
            rerum voluptas. Doloribus enim illo maxime nihil nisi nulla unde.
            At, maiores, voluptas. Architecto assumenda blanditiis cum dolore
            ducimus ea eligendi eos esse et, fugiat, illo inventore laudantium
            nostrum odio officiis quaerat quos repellendus reprehenderit rerum
            sequi soluta vel voluptas! Culpa harum id natus sed tempore vero
            voluptatem. Aspernatur beatae, consectetur consequuntur esse fugit
            hic impedit nam necessitatibus nulla praesentium, provident quas
            recusandae rem sequi soluta ullam veniam vitae! Deleniti doloremque
            ducimus eum eveniet harum odio officiis, sunt voluptatem.
            Dignissimos itaque nobis officia possimus veritatis! Adipisci
            cupiditate dicta dolorem impedit iusto quasi similique totam ut
            voluptas. Ab amet, aspernatur atque autem beatae consequuntur,
            cupiditate debitis dolore dolorem earum eveniet explicabo id
            inventore ipsum itaque laboriosam magnam, maxime molestiae nam neque
            nihil non odit officiis quam qui quia quos ratione reprehenderit
            saepe sapiente similique sit suscipit tempora tempore tenetur ut
            veniam. Dolores doloribus explicabo fugiat id soluta. Amet
            blanditiis corporis culpa delectus doloremque, eligendi, expedita
            labore libero molestiae nam necessitatibus nemo nihil non pariatur
            praesentium quaerat reiciendis reprehenderit repudiandae sapiente
            suscipit temporibus ut voluptatum? Ab aliquam atque commodi deleniti
            deserunt dicta, dignissimos dolores error eveniet expedita iusto
            magnam minus natus nihil quis repellendus ullam? Accusantium
            blanditiis facere fugit hic nihil unde vel.
          </p>
        </div>
      </div>
    </div>
  )
}
