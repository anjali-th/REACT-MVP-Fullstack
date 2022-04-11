DROP TABLE IF EXISTS workoutRoutine;

CREATE TABLE workoutRoutine(
    id SERIAL PRIMARY KEY,
    type TEXT,
    routine TEXT
);

INSERT INTO workoutRoutine (type, routine) VALUES ('upperA', 'Bench-press 3X5
Incline DB Bnch 4X8');
INSERT INTO workoutRoutine (type, routine) VALUES ('lowerA', 'Squat 3X5');
INSERT INTO workoutRoutine (type, routine) VALUES ('upperB', 'Overhead-Press 3X5');
INSERT INTO workoutRoutine (type, routine) VALUES ('fullBodyA', 'Deadlift 3X5');