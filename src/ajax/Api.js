import data from '../../public/data/cities.json'

export const url = "https://api.apixu.com/v1/current.json?key=";
export const key = "b18b14ba85b043e89db130626171705";

export let name = () => {
    data.map(
        city => (city.name[0])
    )
};