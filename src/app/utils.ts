export const log = (...messages:string[]) => {
  console.log(`${messages[0]}%c${messages.slice(1).join()}`, 'color: #1a9608');
};
