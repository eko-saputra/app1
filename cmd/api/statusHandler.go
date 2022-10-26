package main

import (
    "encoding/json"
    "net/http"
)

func (app *application) statusHandler(rw http.ResponseWriter, r *http.Request) {
    currStat := AppStat{
        Stat:        "Available",
        Environment: app.config.env,
        Version:     ver,
    }
    js, err := json.MarshalIndent(currStat, "", "\t")
    if err != nil {
        app.logger.Println(err)
    }
    rw.Header().Set("Content-Type", "application/json")
    rw.WriteHeader(http.StatusOK)
    rw.Write(js)
}