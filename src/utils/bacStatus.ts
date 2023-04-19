const joobeastmed = [
  {
    promile: 0.2,
    description:
      'Môžete sa cítiť mierne uvoľnení a vaše vnútorné obmedzenia sa mierne znížia. Nálada, ktorú ste mali pred tým, ako ste začali piť, sa mierne zlepší.',
  },
  {
    promile: 0.4,
    description:
      'Pocíťte teplo a uvoľnenie. Vaše správanie môže byť prehnané - hovoríte odvážnejšie, rýchlejšie a hlasnejšie ako zvyčajne. Emócie sa zosilňujú - dobrá nálada je ešte lepšia a negatívne emócie ešte negatívnejšie. Môžete pociťovať miernu eufóriu. Myslenie a pamäť môžu byť mierne narušené, čo vás robí nepozornými.',
  },
  {
    promile: 0.7,
    description:
      'Pri tomto stupni opitosti sa začína zhoršovať rovnováha, motorika, zrozumiteľnosť reči, reakčný čas, zrak a sluch. Rozhodovanie, uvažovanie a sebakontrola sú narušené, myslíte si, že to zvládnete lepšie, ako dokážete, a je pre vás ťažké rozhodnúť sa nepokračovať v pití. Môžete sa cítiť euforicky.',
  },
  {
    promile: 1,
    description:
      'Pociťujete eufóriu, ale vaše motorické schopnosti, koordinácia, reakčný čas a rovnováha sú už vážne narušené. Ovplyvnené je aj vaše myslenie a pamäť. Pravdepodobne si nepamätáte, koľko ste už vypili. Vaše emócie sú zosilnené. Niektorí ľudia sú veľmi hluční a agresívni.',
  },
  {
    promile: 1.3,
    description:
      'Zhoršuje sa vám rovnováha a vidíte rozmazane, máte problémy s rozprávaním a chôdzou. Myslenie, vnímanie a úsudok sú vážne narušené. Euforiu začínajú vystriedať nepríjemné pocity úzkosti, nepokoja, hnevu a depresie.',
  },
  {
    promile: 1.6,
    description:
      'Pociťujete silné negatívne emócie a v dôsledku toho môžete byť agresívni - mohli by ste nechtiac ublížiť sebe alebo iným. V tomto štádiu sa môžu objaviť "diery v pamäti" - mozog už nezaznamenáva, čo sa stalo. Motorické schopnosti sú vážne narušené.',
  },
  {
    promile: 2,
    description:
      'Vyzeráte zmätene, v bezvedomí a nechápete veci. Potrebujete pomoc pri vstávaní alebo chôdzi. Ak ste sa zranili, pravdepodobne si to neuvedomujete, pretože necítite bolesť. Môžete pociťovať nevoľnosť alebo vracať (u niektorých ľudí sa tieto príznaky môžu objaviť skôr). Pretože reflex vracania môže byť oslabený, hrozí riziko, že sa udusíte zvratkami. V tejto fáze sú bežné výpadky pamäte, takže je nepravdepodobné, že si na druhý deň ráno budete na niečo z toho pamätať.',
  },
  {
    promile: 2.5,
    description:
      'Všetky mentálne, fyzické a zmyslové funkcie sú vážne narušené. Emocionálne ste necitliví. Existuje zvýšené riziko udusenia vlastnými tŕňmi alebo vážneho zranenia pri páde alebo inej nehode.',
  },
  {
    promile: 3,
    description:
      'Ste v polovedomí. Nemáte prehľad o tom, kde sa nachádzate. Môžete náhle stratiť vedomie a ťažko sa prebudiť.',
  },
  {
    promile: 3.5,
    description:
      'Účinok tejto hladiny alkoholu je rovnaký ako účinok anestézie používanej pri operáciách. Môžete upadnúť do kómy. Môžete prestať dýchať.',
  },
  {
    promile: 4,
    description:
      'Vaše srdce a dýchanie sú narušené. Pravdepodobne ste v kóme alebo ste už mŕtvy.',
  },
  {
    promile: 0,
    description:
      'Môžete pociťovať nevoľnosť alebo bolesť hlavy v dôsledku alkoholu, ktorý ste požili v minulosti.',
  },
];

export const bacStatus = (currentBac: number) => {
  if (currentBac < 0.04 && currentBac > 0) return joobeastmed[0].description;
  if (currentBac === 0) return joobeastmed[11].description;
  else if (currentBac < 0.06) return joobeastmed[1].description;
  else if (currentBac < 0.09) return joobeastmed[2].description;
  else if (currentBac < 0.12) return joobeastmed[3].description;
  else if (currentBac < 0.15) return joobeastmed[4].description;
  else if (currentBac < 0.19) return joobeastmed[5].description;
  else if (currentBac < 0.25) return joobeastmed[6].description;
  else if (currentBac < 0.3) return joobeastmed[7].description;
  else if (currentBac < 0.35) return joobeastmed[8].description;
  else if (currentBac < 0.4) return joobeastmed[9].description;
  else if (currentBac >= 0.4) return joobeastmed[10].description;

  return null;
};
