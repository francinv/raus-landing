import { RegisterForm } from '@/types';

const baseUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSe9kQ9Sgoa2V44OZyZElqNT1olDYii7GO0_-6F259F5p1x_Jg/formResponse?&submit=Submit?usp=pp_url';

const removeOtherTasks = (tasks: string[]) => tasks.filter((task) => task !== 'Annet');
const parseWantedTasks = (tasks: string[]) =>
  `&entry.1135899449=${tasks.map((task) => encodeURIComponent(task)).join('&entry.1135899449=')}`;


const stripSpaces = (str: string) => str.replace(/\s/g, '+');

export const generateGoogleSheetUrl = (form: RegisterForm) => {
  const state = `&entry.180335362=${form.state}`;
  const municipality = `&entry.1060171983=${form.municipality}`;
  const tasks = parseWantedTasks(removeOtherTasks(form.tasks));

  let otherTasks = '';
  if (form.otherTasks) {
    otherTasks = `&entry.1771018152=${encodeURIComponent(form.otherTasks)}`;
  }

  const name = `&entry.1027139273=${stripSpaces(form.name)}`;
  const phone = `&entry.1877899719=${form.phone}`;
  const email = `&entry.288811617=${form.email}`;

  return `${baseUrl}${state}${municipality}${tasks}${otherTasks}${name}${phone}${email}`;
};
