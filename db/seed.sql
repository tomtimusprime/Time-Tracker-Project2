USE employee_db;

INSERT INTO hours (hrs_worked_today, hrs_worked_week, hrs_worked_month, hrs_worked_ytd, earnings_today, earnings_week,
earnings_month, earnings_ytd, user_id, created_at, updated_at)
VALUES (12, 60, 300, 300, 303, 1515, 7575, 7575, 1, NOW(), NOW());

INSERT INTO hours (hrs_worked_today, hrs_worked_week, hrs_worked_month, hrs_worked_ytd, earnings_today, earnings_week,
earnings_month, earnings_ytd, user_id, created_at, updated_at)
VALUES (8, 40, 160, 160, 150, 750, 3000, 3000, 2, NOW(), NOW());
 
INSERT INTO hours (hrs_worked_today, hrs_worked_week, hrs_worked_month, hrs_worked_ytd, earnings_today, earnings_week,
earnings_month, earnings_ytd, user_id, created_at, updated_at)
VALUES (9, 45, 180, 180, 208.35, 1041.75, 4167, 4167, 3, NOW(), NOW());

INSERT INTO hours (hrs_worked_today, hrs_worked_week, hrs_worked_month, hrs_worked_ytd, earnings_today, earnings_week,
earnings_month, earnings_ytd, user_id, created_at, updated_at)
VALUES (5, 15, 60, 60, 60, 240, 960, 960, 4, NOW(), NOW());


-- --Sessions Table data 
INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-01 08:00:00", "2020-01-01 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-02-01 08:00:00", "2020-02-01 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-03 08:00:00", "2020-01-03 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-06-01 08:00:00", "2020-01-06 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-07-01 08:00:00", "2020-01-07 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-08 08:00:00", "2020-01-08 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-09 08:00:00", "2020-01-09 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-10 08:00:00", "2020-01-10 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-13 08:00:00", "2020-01-13 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-14 08:00:00", "2020-01-14 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-15 08:00:00", "2020-01-15 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-16 08:00:00", "2020-01-16 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-17 08:00:00", "2020-01-17 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-20 08:00:00", "2020-01-20 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-21 08:00:00", "2020-01-21 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-22 08:00:00", "2020-01-22 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-23 08:00:00", "2020-01-23 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-24 08:00:00", "2020-01-24 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-27 08:00:00", "2020-01-27 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-28 08:00:00", "2020-01-28 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-29 08:00:00", "2020-01-29 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-30 08:00:00", "2020-01-30 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-01-31 08:00:00", "2020-01-31 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-02-03 08:00:00", "2020-02-03 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-02-04 08:00:00", "2020-02-04 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-02-05 08:00:00", "2020-02-05 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-02-06 08:00:00", "2020-02-06 16:00:00", 8, NOW(), NOW(), 1);

INSERT INTO session (clock_in, clock_out, total_time, created_at, updated_at, user_id)
VALUES ("2020-02-03 08:00:00", "2020-02-03 16:00:00", 8, NOW(), NOW(), 1);





