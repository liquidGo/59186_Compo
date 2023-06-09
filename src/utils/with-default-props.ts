import assignWith from 'lodash/assignWith';

export function mergeProps<A, B>(a: A, b: B): A & B
export function mergeProps<A, B, C>(a: A, b: B, c: C): C & B & A
export function mergeProps(...items: any[]) {
    const customizer = (objValue: any, srcValue: any) => {
        return srcValue !== undefined ? srcValue : objValue;
    }

    let ret = { ...items[0] };

    for (let i = 1; i < items.length; i++) {
        ret = assignWith(ret, items[i], customizer);
    }

    return ret;
}