import { ToDoListModule } from './to-do.module';

describe('ToDoModule', () => {
  let toDoModule: ToDoListModule;

  beforeEach(() => {
    toDoModule = new ToDoListModule();
  });

  it('should create an instance', () => {
    expect(toDoModule).toBeTruthy();
  });
});
