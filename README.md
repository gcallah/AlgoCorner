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
