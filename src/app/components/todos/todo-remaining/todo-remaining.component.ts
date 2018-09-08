export const TodoRemainingComponent = {
  bindings: { remaining: '<' },
  template: `<span > {{ $ctrl.remaining }} remaining</span>`,
  controller: class TodoRemainingController {}
};

