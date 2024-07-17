// 這邊用import是例外，一般不用這樣用，是因為版本的問題
import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = process.argv[2];
const langCode = franc(input);
// 如果有錯誤會出現：franc('') //=> 'und' (language code that stands for undetermined)
if (langCode === 'und') {
    console.log("sorry".red)
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is ${language.name}`.rainbow)
}

// 用網站上的例子(https://github.com/wooorm/franc)
// const langCode = (franc('Alle menslike wesens word vry'));

// "3"是因為 Note: franc returns ISO 639-3 codes (three letter codes).網站上寫的
// langs.where是語法(網站上提供的:https://github.com/adlawson/nodejs-langs)
// const language = langs.where("3", langCode);
// console.log(language.name)
// console.log(language)
// 出現：{
//     '1': 'af',
//     '2': 'afr',
//     '3': 'afr',
//     name: 'Afrikaans',
//     local: 'Afrikaans',
//     '2T': 'afr',
//     '2B': 'afr'
//   }
