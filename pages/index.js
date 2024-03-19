/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from 'react-bootstrap';
import { React } from 'react';
import Link from 'next/link';

function ToxicAffirmations() {
  const affirmation = () => {
    const randomAffirmation = [
      "How can you be the problem, You're the main character",
      "Someone should remind THEM, that THEY'RE in a relationship",
      "They can't get over you, if you're always there",
      // "Get over them, by getting under someone else",
      'Maybe their best friend will treat you better',
      'Leave them breathless, Steal their inhaler',
      "It's not stalking if they ghost you, it's haunting now",
      'You ask why I took YOUR partner, forget the Y, and now you have the answer',
      "They didn't leave you on read, you left them on speechless",
      "You didn't lie to them, they just didn't ask enough questions",
      'If they want THE truth, give them A truth',
      "Remember, loyal people, they don't respond",
      "How are they gonna know, they're never gonna know",
      "You didn't wreck their home, they should have built it on a more solid foundation",
      "Don't let others stop you from getting what you want, especially if what you want is theirs",
    ];

    const randomIndex = Math.floor(Math.random() * randomAffirmation.length);
    return randomAffirmation[randomIndex];
  };

  return (
    <div className="text-center my-4">
      <div>
        <h3 className="sub_titleF" style={{ color: 'goldenrod', fontWeight: 'bold' }}><u>DAILY AFFIRMATIONS</u></h3>
        <h1 className="sub_titleF" style={{ color: 'goldenrod', font: '30px' }}>{affirmation()}</h1>
      </div>
      <Link href="/dates/new" passHref>
        <Button className="btnF" style={{ margin: '10px' }} variant="warning">Add a Date</Button>
      </Link>
      <Link href="/locations/new" passHref>
        <Button className="btnF" style={{ margin: '10px' }} variant="warning">Add a Location</Button>
      </Link>
      <Link href="/logs/new" passHref>
        <Button className="btnF" style={{ margin: '10px' }} variant="warning">Add a log</Button>
      </Link>

    </div>
  );
}

export default ToxicAffirmations;
