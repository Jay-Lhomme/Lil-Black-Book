import { scorchedEarthDates, newEarthDates } from '../api/dateData';

// background-image: URL(https://images.unsplash.com/photo-1478375846947-1abd989ab195?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMHJveWFsfGVufDB8fDB8fHww);

const scorchedEarthProtocol = () => {
  scorchedEarthDates().then(newEarthDates());
};

function randomlink() {
  const rng = [];
  rng[0] = 'http://localhost/joker.php';
  rng[1] = 'http://localhost/loophero.php';
  rng[2] = 'http://localhost/godofwar.php';
  rng[3] = 'http://localhost/friends.php';

  window.location.href = rng[Math.floor(Math.random() * rng.length)];
}

export { randomlink, scorchedEarthProtocol };
