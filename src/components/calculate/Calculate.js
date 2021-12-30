import React, { useState } from "react";
import {
  Box,
  Button,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CreateIcon from "@material-ui/icons/Create";
import "./calculate.css";
import { GrDownload } from "react-icons/gr";

const useStyles = makeStyles({
  root: {
    "& > *": {
      // borderBottom: "unset",
    },
  },
  table: {
    // minWidth: 650,
  },
  snackbar: {
    // bottom: "104px",
  },
});

function Calculate() {
  const classes = useStyles();

  // Defining a state named rows
  // which we can update by calling on setRows function
  const [rows, setRows] = useState([
    {
      id: 1,
      Action: "",
      FromAddress: "",
      ToAddress: "",
      TripDateTime: "",
      Mileage: "",
      TimeTraveled: "",
    },
  ]);

  // Initial states
  const [open, setOpen] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);

  // Function For closing the alert snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Function For adding new row object
  const handleAdd = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        Action: "",
        FromAddress: "",
        ToAddress: "",
        TripDateTime: "",
        Mileage: "",
        TimeTraveled: "",
      },
    ]);
    setEdit(true);
  };

  const handleEdit = (i) => {
    setEdit(!isEdit);
  };

  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    console.log("saved : ", rows);
    setDisable(true);
    setOpen(true);
  };

  const handleInputChange = (e, index) => {
    setDisable(false);
    const { name, value } = e.target;
    const list = [...rows];
    list[index][name] = value;
    setRows(list);
  };

  const handleConfirm = () => {
    setShowConfirm(true);
  };

  const handleRemoveClick = (i) => {
    const list = [...rows];
    list.splice(i, 1);
    setRows(list);
    setShowConfirm(false);
  };

  const handleNo = () => {
    setShowConfirm(false);
  };
  return (
    <div className="container table34 mt-4">
      <TableBody>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          className={classes.snackbar}
        >
          <Alert onClose={handleClose} severity="success">
            Record saved successfully!
          </Alert>
        </Snackbar>
        <Box>
          <div>
            <div>
              {isEdit ? (
                <div>
                  <Button onClick={handleAdd}>
                    <AddBoxIcon onClick={handleAdd} />
                    ADD
                  </Button>
                  {rows.length !== 0 && (
                    <div>
                      {disable ? (
                        <Button disabled align="right" onClick={handleSave}>
                          <DoneIcon />
                          SAVE
                        </Button>
                      ) : (
                        <Button align="right" onClick={handleSave}>
                          <DoneIcon />
                          SAVE
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <Button onClick={handleAdd}>
                    <AddBoxIcon onClick={handleAdd} />
                    ADD
                  </Button>
                  <Button align="right" onClick={handleEdit}>
                    <CreateIcon />
                    EDIT
                  </Button>
                </div>
              )}
            </div>
          </div>

          <Table className="Table">
            <div className="container  Head  ">
              <TableHead>
                <TableRow>
                  <TableCell className="one">
                    <b>Action</b>
                  </TableCell>

                  <TableCell className="one">
                    <b>From Address</b>
                  </TableCell>

                  <TableCell className="one">
                    <b>To Address</b>
                  </TableCell>

                  <TableCell className="one">
                    <b>Trip DateTime</b>
                  </TableCell>

                  <TableCell className="one">
                    <b>Mileage</b>
                  </TableCell>

                  <TableCell className="one">
                    <b>Time Traveled</b>
                  </TableCell>
                </TableRow>
              </TableHead>
            </div>
            <TableBody>
              {rows.map((row, i) => {
                return (
                  <div>
                    <TableRow>
                      {isEdit ? (
                        <div className="Table23 offset-1">
                          <TableCell>
                            <input
                              className="input"
                              placeholder="choose from Address"
                              value={row.FromAddress}
                              name="FromAddress"
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </TableCell>
                          <TableCell>
                            <input
                              className="input"
                              placeholder="choose To Address"
                              value={row.ToAddress}
                              name="ToAddress"
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </TableCell>
                          <TableCell>
                            <input
                              className="input"
                              type="date"
                              value={row.TripDateTime}
                              name="TripDateTime"
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </TableCell>
                          <TableCell>
                            <td>Result Awaiting</td>
                          </TableCell>
                          <TableCell>
                            <td>0 mins</td>
                          </TableCell>
                        </div>
                      ) : (
                        <div>
                          {/* <TableCell component="th"></TableCell> */}
                          <TableCell component="th">
                            {row.FromAddress}
                          </TableCell>
                          <TableCell component="th">{row.ToAddress}</TableCell>
                          <TableCell component="th">
                            {row.TripDateTime}
                          </TableCell>
                          <TableCell component="th">{row.Mileage}</TableCell>
                          <TableCell component="th">
                            {row.TimeTraveled}
                          </TableCell>
                          <TableCell component="th" scope="row"></TableCell>
                        </div>
                      )}
                      {isEdit ? (
                        <Button className="" onClick={handleConfirm}>
                          <ClearIcon  />
                        </Button>
                      ) : (
                        <Button className="" onClick={handleConfirm}>
                          <DeleteOutlineIcon />
                        </Button>
                      )}
                      {showConfirm && (
                        <div>
                          <Dialog
                            open={showConfirm}
                            onClose={handleNo}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">
                              {"Confirm Delete"}
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                Are you sure to delete
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button
                                onClick={() => handleRemoveClick(i)}
                                color="primary"
                                autoFocus
                              >
                                Yes
                              </Button>
                              <Button
                                onClick={handleNo}
                                color="primary"
                                autoFocus
                              >
                                No
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </div>
                      )}
                    </TableRow>
                  </div>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </TableBody>
      <div className="row offset-3 mb-2 ">
        <div className="col-lg-12 col-md-12  mt-3" id="buttons">
          <Button variant="contained" id="btn1">
            Calculate Distance
          </Button>{" "}
          <Button variant="contained" id="btn1">
            <GrDownload />
            &nbsp; Download Report
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Calculate;
