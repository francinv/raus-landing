import { RegisterForm } from '@/types';

const baseUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSdDpUoyHZYqowULA6C73lOwXeK5K4I06hBQWDlL7-Hcb7Nxfw/formResponse?&submit=Submit?usp=pp_url';

const removeOtherTasks = (tasks: string[]) => tasks.filter((task) => task !== 'Annet');
const parseWantedTasks = (tasks: string[]) =>
  `&entry.1047108041=${tasks.map((task) => encodeURIComponent(task)).join('&entry.1047108041=')}`;

const stripSpaces = (str: string) => str.replace(/\s/g, '+');

export const generateGoogleSheetUrl = (form: RegisterForm) => {
  const amount = `&entry.2050866611=${form.amountOfTasks}`;
  const location = `&entry.577097576=${form.municipality}`;
  const tasks = parseWantedTasks(removeOtherTasks(form.tasks));

  let otherTasks = '';
  if (form.otherTasks) {
    otherTasks = `&entry.1549754783=${encodeURIComponent(form.otherTasks)}`;
    console.log('otherTasksUrl:', otherTasks);
  }

  const name = `&entry.38956151=${stripSpaces(form.name)}`;
  const phone = `&entry.1400575833=${form.phone}`;
  const email = `&entry.559193587=${form.email}`;

  return `${baseUrl}${amount}${location}${tasks}${otherTasks}${name}${phone}${email}`;
};
