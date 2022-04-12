DROP TABLE IF EXISTS savedWorkout;
DROP TABLE IF EXISTS workoutRoutine;

CREATE TABLE workoutRoutine(
    id SERIAL PRIMARY KEY,
    type TEXT,
    set TEXT,
    exercise1 TEXT,
    exercise2 TEXT,
    exercise3 TEXT,
    exercise4 TEXT,
    exercise5 TEXT
);

CREATE TABLE savedWorkout(
    id SERIAL PRIMARY KEY,
    type TEXT,
    set TEXT,
    exercise1 TEXT,
    exercise2 TEXT,
    exercise3 TEXT,
    exercise4 TEXT,
    exercise5 TEXT,
    routineId INTEGER REFERENCES workoutRoutine(id)
);

INSERT INTO workoutRoutine (type, set, exercise1, exercise2, exercise3, exercise4, exercise5 ) VALUES ('upper','A', 'Barbell Bench Press 3 X 5','Incline Dumbell Bench Press 4 X 8', 'Barbell Row 4 X 8', 'Cable Rope Tricep Pushdown 3 X 15', 'Dumbell Rear Delt Lateral Raise 3 X 15');
INSERT INTO workoutRoutine (type, set, exercise1, exercise2, exercise3, exercise4, exercise5 ) VALUES ('upper','B', 'Standing Barbell Overhead Press 3 X 5', 'Seated Dumbell Overhead Press 4 X 8', 'Pull-up 4 X 8', 'Barbell Curl 3 X 15', 'Dumbell Lateral Raise 3 X 15');
INSERT INTO workoutRoutine (type, set, exercise1, exercise2, exercise3, exercise4, exercise5 ) VALUES ('lower','A', 'Barbell Back Squat 3 X 5', 'Leg Press 4 X 8', 'Prone Hamstring Curl 3 X 15', 'Seated Calf Raise 3 X 15','');
INSERT INTO workoutRoutine (type, set, exercise1, exercise2, exercise3, exercise4, exercise5 ) VALUES ('lower','B', 'Barbell Conventional Deadlift 1 X 5', 'Barbell Romanian Deadlift 4 X 8', 'Leg Extensions 3 X 15', 'Standing Calf Raise 3 X 15', '');
INSERT INTO workoutRoutine (type, set, exercise1, exercise2, exercise3, exercise4, exercise5 ) VALUES ('full','A', 'Barbell Bench Press 3 X 5', 'Barbell Front Squat 4 X 8', 'Seated Cable Rows 4 X 8', 'Barbell Curl 3 X 15', '');
INSERT INTO workoutRoutine (type, set, exercise1, exercise2, exercise3, exercise4, exercise5 ) VALUES ('full','B', 'Barbell Conventional Deadlift 1 X 5', 'Seated Dumbell Overhead Press 4 X 8', 'Lat Pulldown 4 X 8', 'Cable Rope Tricep Pushdown 3 X 15','');
INSERT INTO workoutRoutine (type, set, exercise1, exercise2, exercise3, exercise4, exercise5 ) VALUES ('full','C', 'Barbell Back Squat 3 X 5', 'Incline Dumbell Bench Press 4 X 8', 'Barbell Romanian Deadlift 4 X 8', 'Dumbell Lateral Raise 3 X 15', '');
INSERT INTO workoutRoutine (type, set, exercise1, exercise2, exercise3, exercise4, exercise5 ) VALUES ('full','D', 'Standing Barbell Overhead Press 3 X 5', 'Leg Press 4 X 8', 'Leg Extension 3 X 15', 'Dumbell Rear Delt Lateral Raise 3 X 15', '');
