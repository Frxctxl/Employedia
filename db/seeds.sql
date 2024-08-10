INSERT INTO departments (dept_name) VALUES
  ('Engineering' ),
  ('Sales'),
  ('HR');

INSERT INTO roles (title, salary, dept_id) VALUES
  ('Electricial Engineer', 200000.00, 1),
  ('Mechanical Engineer', 300000.00, 1),
  ('Personnel Manager', 2.00, 3);

INSERT INTO employees (
  first_name, last_name, role_id, manager_id
) VALUES ( 'Jayden', 'Benston', 1, NULL  );
