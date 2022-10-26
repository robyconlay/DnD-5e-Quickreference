Quick reference sheet for D&amp;D 5e

Available Scripts
===

In the project directory, you can run:
- `npm start` to run the app in development mode


FAQ
===

#### Q: I have found a layout issue or a major issue in one of the core items, what should I do? ####
A: Open an issue at https://github.com/robyconlay/DnD-5e-Quickreference. Even better: fork the project, fix the problem, and post a pull request.

#### Q: I have an idea for a minor tweak, such as adding actions specific for my character. How do I modify the content of the sheet? ####
A: Open the folder called `src/assets/text`, and edit one of the `data` files, in the language you need/prefer or all languages

#### Q: How do I add a new language? ####
A: Do the following steps
- Add your language in `src/utils/locales.ts`
- Setup your language config in `src/assets/i18n/config.js`
- Add a new `.json` file with your locale in `src/assets/i18n/locales` with your translations
- Copy all the `data_[type].js` files in a new folder (named with a language locale), where you'll add translations
