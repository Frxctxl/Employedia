INSERT INTO departments (id, dept_name) VALUES
  ( 1, 'Engineering' ),
  (2, 'Sales'),
  (3, 'HR');

INSERT INTO roles (id, title, salary, dept_id) VALUES
  ( 1, 'Electricial Engineer', 200000.00, 1),
  (2, 'Mechanical Engineer', 300000.00, 1),
  (3, 'Personnel Manager', 2.00, 3);

INSERT INTO employees (
  id, first_name, last_name, role_id, manager_id
) VALUES ( 4, 'Jayden', 'Benston', 1, NULL  );
