const compose = (...fns) => (input) =>
    fns.reduceRight((output, fn) => fn(output), input);

export default compose;
