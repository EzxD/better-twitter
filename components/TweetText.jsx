//  text: "@taatsboss wurde gesperrt sein neuer Account ist @staatsb0ss der @paul dem bre follow da",
//  text: "Staatsboss wurde gesperrt sein neuer Account ist @staatsb0ss @paul ",
// mention in 49, 69 und 62, 66
// {
//  screen_name: "staatsb0ss",
//  name: "staatsboss",
//  id: 1442397887644647400,
//  id_str: "1442397887644647425",
//  indices: [49, 60],
//},
// {
//  screen_name: "paul",
//  name: "paul",
//  id: 1442397887644647400,
//  id_str: "1442397887644647425",
//  indices: [62, 66],
//},

import { v4 as uuidv4 } from "uuid";

export const getTweetText = (text, mentions) => {
  //check mentions present
  if (mentions.length === 0) {
    return text;
  }
  const array = [];
  const length = mentions.length - 1;
  mentions.forEach((mention, i) => {
    if (i == 0) {
      if (mention.indices[0] == 0) {
        array.push(extractMentions(text, mention));
        return;
      }
      array.push(extractText(text, 0, mentions[0].indices[0]));
      return;
    }
    if (i > 0) {
      array.push(
        extractText(text, mentions[i - 1].indices[1], mention.indices[0])
      );
    }
    array.push(extractMentions(text, mention));

    if (i == length) {
      array.push(
        <span key={uuidv4()}>{text.substring(mention.indices[1])}</span>
      );
    }
  });
  return array;
};

const extractText = (text, start, end) => {
  return <span key={uuidv4()}>{text.substring(start, end)}</span>;
};

export const getTweetText2 = (text, mentions) => {
  return (
    <div className="text-sm">
      <span>{text.substring(0, 49)}</span>
      {extractMentions(text)}
      <span>{text.substring(60)}</span>
    </div>
  );
};

const extractMentions = (text, mention) => {
  return (
    <div key={mention.id} className="inline">
      <span
        onClick={() => alert(`go to fucking ${mention.name}`)}
        className="text-[#1B95E0]"
      >
        {text.slice(mention.indices[0], mention.indices[1])}
      </span>
    </div>
  );
};

export const test = (text, mentions) => {
  const element = (
    <div>
      <h1>test</h1>
    </div>
  );

  const array = [];

  array.push(element);
  array.push(element);
  array.push(element);
  return array;
};
