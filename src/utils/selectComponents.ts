// @ts-ignore
import {MultiSelect} from 'enquirer';
/**
 * Provides a interactive prompt to select components
 * @param {any} components - list of components
 */
export async function selectComponents(components: any): Promise<any> {
  let selectedComponents: any = undefined;
  const prompt = new MultiSelect({
    name: 'value',
    message: 'Pick components to run',
    choices: components.map((component: any) => {
      return {name: component.name, value: component};
    }),
    result(names:any) {
      const componentsMap = this.map(names);
      const componentsList = Object.values(componentsMap);
      return componentsList;
    },
  });
  await prompt.run()
      .then((answer:any) => selectedComponents = answer);
  return selectedComponents;
}
