export default function Myportfolio() {
  return (
    <main className="bg-red-600">
      <section aria-labelledby="home-heading">
        <h1 id="home-heading">Bienvenue sur mon portfolio</h1>
        <p>
          Je suis un développeur web passionné par la création de sites modernes
          et performants.
        </p>
        <a href="#works">Voir mes projets</a>
      </section>

      <section id="about" aria-labelledby="about-heading">
        <h2 id="about-heading">À propos de moi</h2>
        <p>
          Je suis un développeur spécialisé en React, Next.js et en ingénierie
          logicielle avec une expérience en modélisation BIM.
        </p>
      </section>

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
    </main>
  );
}
