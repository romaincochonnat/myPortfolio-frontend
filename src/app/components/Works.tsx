import { FC } from "react";

export const Works: FC = () => {
  return (
<section id="works" aria-labelledby="works-heading">
        <h2 id="works-heading">Mes projets</h2>
        <article>
          <h3>Projet 1 : Application E-commerce</h3>
          <p>
            Une application e-commerce développée avec React et Next.js,
            intégrant Stripe pour les paiements sécurisés.
          </p>
          <a href="https://mon-projet.com" target="_blank">
            Voir le projet
          </a>
        </article>
        <article>
          <h3>Projet 2 : Dashboard de gestion</h3>
          <p>
            Un dashboard interactif construit avec TypeScript et Next.js pour la
            gestion des utilisateurs.
          </p>
          <a href="https://mon-projet2.com" target="_blank">
            Voir le projet
          </a>
        </article>
      </section>
  )
}