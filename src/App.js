import React, { useState } from "react";
import Menu from "./js/Menu";
import Content from "./js/Content";
import Sidebar from "./js/Sidebar";
import "./css/style.css";

const database = {
  Smiley: {
    "😀": [
      "Grinning Face",
      "A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor.",
    ],
    "😄": [
      "Grinning Face with Smiling Eyes",
      "A yellow face with smiling eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general happiness and good-natured amusement.",
    ],
    "😆": [
      "Grinning Squinting Face",
      "A yellow face with a broad, open smile and scrunched, X-shaped eyes. Often conveys excitement or hearty laughter.",
    ],
    "😅": [
      "Grinning Face with Sweat",
      "Has the same grin and eyes as 😄 Grinning Face With Smiling Eyes but with a single, blue bead of sweat, usually over its left eye. Intended to depict nerves or discomfort but commonly used to express a close call, as if saying Whew! and wiping sweat from the forehead.",
    ],
    "🤣": [
      "Rolling on the Floor Laughing",
      "A yellow face with a big grin and scrunched, X-shaped eyes, tilted on its side as if rolling on the floor laughing (the internet acronym ROFL). Sheds two tears and tilts right on most platforms. Often conveys hysterical laughter more intense than 😂 Face With Tears of Joy.",
    ],
    "😂": [
      "Face with Tears of Joy",
      "A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing. ",
    ],
    "😒": [
      "Unamused Face",
      "A yellow face with slightly raised eyebrows, a frown, and eyes looking to the side. May convey a variety of negative emotions, including irritation, displeasure, grumpiness, and skepticism, as if giving the side-eye.",
    ],
    "🙃": [
      "Upside-Down Face",
      "A classic smiley, turned upside down. Implemented as a flipped version of 🙂 Slightly Smiling Face on most platforms. Commonly used to convey irony, sarcasm, joking, or a sense of goofiness or silliness. Its intent can be similar to the bemused Oh well! of 🤷 Person Shrugging or the shruggie emoticon, ¯\\_(ツ)_/¯.",
    ],
    "😉": [
      "Winking Face",
      "A yellow face with a slight smile shown winking, usually its left eye. May signal a joke, flirtation, hidden meaning, or general positivity. Tone varies, including playful, affectionate, suggestive, or ironic.",
    ],
    "🙄": [
      "Face with Rolling Eyes",
      "A yellow face with a small, closed mouth, flat or frowning, rolling its large, white eyes upwards. As with the gesture of an eye-roll, commonly conveys moderate disdain, disapproval, frustration, or boredom. Tone varies, including playful, sassy, resentful, and sarcastic, as if saying Yeah, whatever.",
    ],
    "😇": [
      "Smiling Face with Halo",
      "A yellow face with smiling eyes, closed smile, and halo, usually blue, overhead. Often represents angels, prayers, and blessings. May also convey angelic behavior, e.g., doing good deeds.",
    ],
    "😐": [
      "Neutral Face",
      "A yellow face with simple, open eyes and a flat, closed mouth. Intended to depict a neutral sentiment but often used to convey mild irritation and concern or a deadpan sense of humor.",
    ],
    "😑": [
      "Expressionless Face",
      "A yellow face with flat, closed eyes and mouth. May convey a sense of frustration or annoyance more intense than suggested by 😐 Neutral Face, as if taking a moment to collect itself.",
    ],
    "😶": [
      "Face Without Mouth",
      "A yellow face with simple, open eyes and no mouth, as if at a loss for words. Meaning widely varies, but commonly conveys speechlessness, humility, and silence. May also convey moderately negative emotions, such as disappointment, frustration, or sadness.",
    ],
    "😏": [
      "Smirking Face",
      "A yellow face with a sly, smug, mischievous, or suggestive facial expression. It features a half-smile, raised eyebrows, and eyes looking to the side. Often used to convey flirtation or sexual innuendo.",
    ],
  },
  People: {
    "👩": [
      "Woman",
      "A woman of adult age. Differentiated from the girl emoji by the lack of pig-tails in her hair.",
    ],
    "👨": [
      "Man",
      "A man of adult age, shown on some platforms with a moustache.",
    ],

    "👶": [
      "Baby",
      "The face of a young infant (baby). Shows the face of a baby with a small amount of hair on most platforms, while some variations show a pacifier (dummy) in its mouth. Android previously displayed this emoji as a swaddled baby.",
    ],
    "🧒": [
      "Child",
      "A child with no gender specified. This may be used as a gender-inclusive alternative to the boy or girl emoji.",
    ],
    "👦": [
      "Boy",
      "The face of a boy, smiling. Previously differentiated from the man emoji on Android by wearing a cap, and on iOS by the lack of any facial hair.",
    ],
    "👧": [
      "Girl",
      "The face of a girl, smiling. Differentiated from the woman emoji by the hairstyle which features pigtails which are not present on the woman.",
    ],

    "👴": [
      "Old Man",
      "An elderly man gray (grey) hair, and visible wrinkles. Balding in many versions of this artwork, such as Apple and Microsoft designs.",
    ],
    "👵": [
      "Old Woman",
      "An elderly woman with gray (grey) hair, and visible wrinkles. Wears glasses on some platforms.",
    ],
    "🤦": [
      "Person Facepalming",
      "A hand shown pressing against the head of a person, commonly written as facepalm. Used to display frustration or embarrassment at the ineptitude of a person or situation.",
    ],
    "🤷": [
      "Person Shrugging",
      "A person shrugging their shoulders to indicate a lack of knowledge about a particular topic, or a lack of care about the result of a situation. Displays as raised shoulders, sometimes in conjunction with raised arms and flat hands. The shrug gesture in text (emoticon / kaomoji) form is known as a shruggie and typed as: ¯\\_(ツ)_/¯",
    ],
    "🙍": [
      "Person Frowning",
      "An upset person, frowning with dismay. Gender is not specified, but generally shown as a woman.",
    ],
    "🙎": [
      "Person Pouting",
      "A person with a serious expression, showing mild displeasure with the situation. Could be considered to be reserved or stoic in response, as this person is not visible angry.",
    ],
    "🙆": [
      "Person Gesturing OK",
      "A person with arms above her or his head, making an ‘OK’ sign (circle) with the whole body. No gender is specified, but this emoji is generally shown as a woman.",
    ],
    "🙅": [
      "Person Gesturing No",
      "A person with arms crossed forming an ‘X’ to indicate ‘no’ or ‘no good’. This motion is used on the TV game show Deal or No Deal to indicate ‘No Deal’. Intended to be gender-neutral but shown as a woman on most platforms.",
    ],
    "🎅": [
      "Santa Claus",
      "Santa Claus, sometimes referred to as Father Christmas, brings joy to children at Christmas time. Displayed with a beard and red festive hat.",
    ],
  },
  Animals: {
    "🐱": [
      "Cat Face",
      "Meow! A friendly, cartoon-styled face of a cat, looking straight ahead. Generally depicted as a yellowish-orange cat face with pointed ears and whiskers.",
    ],
    "🙈": [
      "See-No-Evil Monkey",
      "The see no evil monkey, called Mizaru (Japanese for “see not”), one of the Three Wise Monkeys. Depicted as the brown 🐵 Monkey Face with tan or pinkish hands covering its eyes.",
    ],
    "🙉": [
      "Hear-No-Evil Monkey",
      "The hear no evil monkey, called Kikazaru (Japanese for “hear not”), one of the Three Wise Monkeys. Depicted as the brown 🐵 Monkey Face with tan or pinkish hands covering its ears.",
    ],
    "🙊": [
      "Speak-No-Evil Monkey",
      "The speak no evil monkey, called Iwazaru (Japanese for “say not”), one of the Three Wise Monkeys. Depicted as the brown 🐵 Monkey Face with its tan or pinkish hands covering its mouth.",
    ],
    "🐶": [
      "Dog Face",
      "A friendly, cartoon-styled face of a dog, looking straight ahead. Depicted as the face of a dog of various breeds, generally light-brown and white, with pointed or floppy ears and its tongue hanging out.",
    ],
    "🐢": [
      "Turtle",
      "A turtle, a slow-moving reptile with a shell. Depicted as a light-green turtle in full profile on all fours facing left, with a long neck and green, textured shell.",
    ],
    "🦄": [
      "Unicorn",
      "The face of a unicorn, a mythical creature in the form of a white horse with a single, long horn on its forehead. Generally depicted as a white horse head facing left with a pink or purple mane and a yellow or rainbow-colored horn. In addition to the mythical unicorn, may be used to convey whimsy, fantasy, uniqueness, specialness, peace, and love. Often used for various content related to the LGBTQ community, thanks in part to its rainbow colors on many platforms. Also often used in association with “unicorn” startups. Sometimes used as a rainbow or holographic accent color.",
    ],
    "🐻": [
      "Bear",
      "A friendly, cartoon-styled face of bear, looking straight ahead. Depicted as a brown bear with round ears and a tan muzzle. Resembles a teddy bear. Often used with an affectionate tone. Does not have a full-bodied bear emoji counterpart.",
    ],
    "🦋": [
      "Butterfly",
      "A butterfly, a beautiful winged insect whose larva is a caterpillar. Depicted with its wings outspread, as a blue-and-black morpho butterfly or orange-and-black monarch butterfly.",
    ],
    "🐔": [
      "Chicken",
      "A chicken, a bird used for its meat and eggs. Generally depicted as the white head of a chicken (hen or rooster) looking left, with a yellow beak, red comb on its head, and red wattle on its neck.",
    ],
    "🦅": [
      "Eagle",
      "A bald eagle, the majestic bird of prey with brown feathers and distinctive white head. Generally depicted facing left, with its wings outspread and talons out, as if swooping down to seize prey.",
    ],
    "🕊️": [
      "Dove",
      "A dove carrying an olive branch, a symbol of peace in Western and Judeo-Christian culture. Depicted as a white bird in full profile facing left, flying as it holds a green sprig in its beak. Commonly used to represent such sentiments as peace, love, hope, and reconciliation.",
    ],
    "🦉": [
      "Owl",
      "An owl, the hooting, large-eyed bird of the night. Depicted as a reddish-brown owl, as a great horned owl, facing forward, Shown with large, round, gold-rimmed eyes, feet curled on or as if on a branch, wings tucked in, and its distinctive, horn-like tufts of feathers. May be used to represent wisdom.",
    ],
    "🐬": [
      "Dolphin",
      "A dolphin, a sleek marine mammal known to be social and intelligent. Generally depicted as a light-blue dolphin with a white belly in full profile facing left, its short snout curving down to a prominent dorsal fin and tail, as a bottlenose dolphin leaping in the air. May be used for various content concerning swimming, oceans, beaches, and summer fun.",
    ],
    "🦌": [
      "Deer",
      "A deer, a fleet-footed, hoofed mammal whose males (bucks, stags) generally have antlers. Variously depicted as a light-brown deer in full profile on all fours facing left or as a deer face looking straight head; both depictions feature large, branched antlers. May be used to represent elk, moose, antelope, or reindeer, especially in connection with Christmas.",
    ],
  },
  Nature: {
    "🍀": [
      "Four Leaf Clover",
      "A four-leaf clover, a symbol of good luck. Depicted as a bright green sprig of clover, with four, heart-shaped leaves.",
    ],
    "🌹": [
      "Rose",
      "A red rose. Depicted as a single, vertical red rose on a green stem. Commonly used for Valentine’s Day, Mother’s Day, and other special occasions. May be more generally used to express such sentiments as love and romance. Also used as a symbol of socialism or as a red accent color.",
    ],
    "🌻": [
      "Sunflower",
      "A sunflower, a tall, round flower with large yellow petals. Depicted as a single, vertical sunflower with a large, dark-brown center on a green stem. Commonly used for Mother’s Day and other special occasions. May be more generally used to convey such sentiments happiness and love. Also used as a yellow accent color and in association with summer and farming.",
    ],
    "🌲": [
      "Evergreen Tree",
      "An evergreen tree, which keeps green leaves all year round. Depicted as a tall, dark green, cone-shaped tree with shaggy, layered leaves, as a pine or fir, showing a brown trunk.",
    ],
    "🌴": [
      "Palm Tree",
      "A palm tree, a tree-like plant, as grows by the sea. Depicted as a palm tree with long, green, feather-like leaves and a tall, brown, segmented trunk. May be used to represent beaches, tropical climates and cultures, summer fun, and vacations (holidays). Vendors implement a similar tree in their 🏝️ Desert Island.",
    ],
    "🍁": [
      "Maple Leaf",
      "The distinctive, star-shaped leaf of the maple tree. Depicted as a reddish-orange maple leaf, as has changed color in the fall/autumn, with five pointed segments. Used as an emblem of Canada, featured on the 🇨🇦 Flag of Canada. Also used to represent trees and the season of fall/autumn more generally.",
    ],
    "🌙": [
      "Crescent Moon",
      "A crescent moon, as in its waxing crescent phase. Depicts the moon as a thin, golden crescent, curving to the right and not displaying the remaining outline of the moon. May be used for the moon more generally and saying good night. May be used in association with ☪️ Star and Crescent, a popular but unofficial symbol of Islam.",
    ],
    "☀️": [
      "Sun",
      "The sun, the star at the center of our solar system. Generally depicted as a golden-yellow disc radiating eight triangular rays, representing the sun’s heat and light. Commonly used to represent sunny, warm, or hot weather, light, heat, energy, life, outer space, astronomy, and various positive and happy (sunny) feelings.",
    ],
    "⭐": [
      "Star",
      "A classic, five-point gold star. Commonly used for various metaphorical senses of star (e.g., for fame, success, excellence, reviews). Also used for emphasis or flair. Occasionally used for astronomical stars.",
    ],
    "❄️": [
      "Snowflake",
      "The unique, feathery ice crystal of a snowflake. Depicted as a bluish-white snowflake with six intricate symmetrical branches.",
    ],
    "🌈": [
      "Rainbow",
      "The colorful arc of a rainbow, as may appear after rain. Generally depicted as the left half of a full rainbow, showing six bands of color: red, orange, yellow, green, blue, and violet. Commonly used to express gay pride. Also commonly used to convey various feelings of love and happiness. See also 🏳️‍🌈 Rainbow Flag.",
    ],
    "🔥": [
      "Fire",
      "A flame, as produced when something is on fire. Depicted as a red, orange, and yellow flickering flame. Commonly used for various metaphorical expressions related to fire, including the slang hot (“attractive”) and lit (“excellent”).",
    ],
    "☁️": [
      "Cloud",
      "A fluffy, white cloud, as a cumulus. May be used as a weather icon to represent a cloudy or overcast day.",
    ],
    "⚡": [
      "High Voltage",
      "A symbol for high voltage, as warns against injury from electricity. Depicted as a jagged yellow bolt. Commonly used to represent lightning, electricity, and various flashes. Also used to represent metaphorical energy and signal attention online.",
    ],
    "🎄": [
      "Christmas Tree",
      "A classic Christmas tree, an evergreen tree decorated with lights and ornaments to celebrate Christmas.  Depicted with round, variously colored ornaments and topped with a yellow star. Used for various content concerning the Christmas holiday and season as well as for wintertime more generally.",
    ],
  },
};

export default function App() {
  const [emoji, setEmoji] = useState("😀");
  const [meaning, setMeaning] = useState([
    "Grinning Face",
    "A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor.",
  ]);
  const [type, setType] = useState("Smiley");

  return (
    <div className="wrapper">
      <Menu
        type={type}
        setType={setType}
        setEmoji={setEmoji}
        database={database}
      />
      <Content
        type={type}
        setType={setType}
        emoji={emoji}
        setEmoji={setEmoji}
        meaning={meaning}
        setMeaning={setMeaning}
        database={database}
      />
      <Sidebar emoji={emoji} meaning={meaning} />
    </div>
  );
}
