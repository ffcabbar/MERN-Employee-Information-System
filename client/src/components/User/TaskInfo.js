import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Typography,
  ListItem,
  List,
  ListItemText,
  Button,
  Divider,
  TextField,
} from "@material-ui/core";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  postBtn: {
    width: "50%",
  },
}));

const TaskInfo = () => {
  const classes = useStyles();

  const [allTask, setAllTask] = useState([]);

  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [currentId, setCurrentId] = useState(0);

  const getTasks = () => {
    Axios.get("http://localhost:5000/tasks").then((res) => {
      console.log(res.data, "bla bla bla");
      setAllTask([...res.data]);
    });
  };

  const handleChange = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setTask(e.target.value);
    }
  };

  const submit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      title,
      task,
    };

    if (currentId === 0) {
      Axios.post("http://localhost:5000/tasks", dataToSubmit)
        .then((res) => {
          if (res.status === 200) {
            getTasks();
            setTitle("");
            setTask("");
          } else {
            alert("Bir hata oluştu bir daha deneyiniz");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Axios.put(`http://localhost:5000/tasks/${currentId}`,dataToSubmit).then((res) => {
        if (res.status === 200) {
          getTasks();
          setTitle("");
          setTask("");
          setCurrentId(0);
        } else {
          alert("Bir hata oluştu bir daha deneyiniz");
        }
      });
    }
  };

  const editTask = (id, title, task) => {
    console.log(id, "edit id");
    // console.log(title);
    // console.log(task);

    setTitle(title);
    setTask(task);

    setCurrentId(id);

    // const newList = allTask.map((item) => {
    //   if (item._id === id) {
    //     Axios.put(`http://localhost:5000/tasks/${id}`)
    //       .then((res) => {
    //         if (res.status === 200) {
    //           getTasks();
    //         } else {
    //           alert("Bir hata oluştu bir daha deneyiniz");
    //         }
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });

    //     return newList;
    //   }

    //   return item;
    // });

    // setAllTask(...newList);
  };

  const deleteTask = (id) => {
    console.log(id, "delete id");

    Axios.delete(`http://localhost:5000/tasks/${id}`)
      .then((res) => {
        if (res.status === 200) {
          getTasks();
          setTitle("");
          setTask("");
        } else {
          alert("Bir hata oluştu bir daha deneyiniz");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <form
              onSubmit={submit}
              noValidate
              className={`${classes.root} ${classes.form}`}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                autoFocus
                value={title}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="task"
                label="Task"
                name="task"
                autoComplete="task"
                multiline
                rows={4}
                value={task}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                className={classes.postBtn}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <List>
              {allTask.map((item) => {
                return (
                  <React.Fragment key={item._id}>
                    <ListItem>
                      <ListItemText>
                        <Typography variant="h5">{item.title}</Typography>
                        <div>{item.task}</div>
                        <div className={classes.actionDiv}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.smMargin}
                            onClick={() =>
                              editTask(item._id, item.title, item.task)
                            }
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            className={classes.smMargin}
                            onClick={() => deleteTask(item._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </ListItemText>
                    </ListItem>
                    <Divider component="li" />
                  </React.Fragment>
                );
              })}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default TaskInfo;
