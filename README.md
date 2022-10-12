# AlgoCorner


## General Design:

- Common components go in `src/components/Common`
- Pages go in `src/pages`
- Algorithms can be put in `src/algorithms`

The design is for each component to expose an interface for the pages to use.
It should have functions **like**:

- `setup()`
- `step()`
- `run(n=num_steps)`


The algorithms can inform the user interface file about what they need to run.
So, for instance, to set up a hash algorithm, we might need:

{
    {
        question: 'What is the hash table size?',
        loval: 6,
        hival: 40,
    },
    {
        question: 'What hash algorithm do you want to use?',
        choices: ['foo', 'bar', 'what']
    },
}
    
