import { IDBCounter } from '.';
import { fetchAnimeCounter } from '../../anilist/requests/counter';
import { Counter } from './model';

const fetchTotalCounter = async (id: number): Promise<number> => {
    const { duration, episodes } = await fetchAnimeCounter(id);

    return episodes * duration;
};

const handleCounter = async (response: IDBCounter): Promise<number> => {
    response.counter = await fetchTotalCounter(response._id);

    return response.save().then(({ counter }: IDBCounter) => counter).catch(() => 0);
};

export const fetchCounter = async (id: number): Promise<number>  => {
    const options = { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true };

    return Counter.findByIdAndUpdate(id, {}, options).then(handleCounter).catch(() => 0);
};

export const fetchCounterInfo = async (id: number): Promise<number> => {
    return Counter.findById(id).then(({ counter }: IDBCounter) => (null !== counter) ? counter : 0).catch(() => 0);
};
