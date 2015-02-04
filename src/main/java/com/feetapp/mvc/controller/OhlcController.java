package com.feetapp.mvc.controller;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import com.feetapp.mvc.model.OhlcModel;
import com.feetapp.util.http.HttpClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.*;

@Controller
public class OhlcController {

    private static final Logger LOG = LoggerFactory.getLogger(OhlcController.class);

    @RequestMapping(value = "/rest/ohlc*", method = RequestMethod.GET)
    public
    @ResponseBody
    OhlcModel[] getDummyEmployee() {


        HttpClient httpClient = new HttpClient();

        String resultData = httpClient.doStringGet("https://api.kraken.com/0/public/OHLC?pair=XBTUSD");

        LinkedHashMap resultMap = null;

        try {
            resultMap = new ObjectMapper().readValue(resultData.getBytes(), LinkedHashMap.class);
        } catch (IOException e) {
            e.printStackTrace();
        }

        LinkedHashMap result = (LinkedHashMap) resultMap.get("result");
        ArrayList arrayList = (ArrayList) result.get("XXBTZUSD");


        OhlcModel[] arr = new OhlcModel[arrayList.size()];

        for (int i = 0; i < arrayList.size(); i++) {

            ArrayList<Object> data = (ArrayList<Object>) arrayList.get(i);

            OhlcModel ohlcModel = new OhlcModel();
            ohlcModel.setTime(new Date(Long.parseLong(data.get(0).toString())));
            ohlcModel.setOpen(Float.parseFloat(data.get(1).toString()));
            ohlcModel.setHigh(Float.parseFloat(data.get(2).toString()));
            ohlcModel.setLow(Float.parseFloat(data.get(3).toString()));
            ohlcModel.setClose(Float.parseFloat(data.get(4).toString()));
            arr[i] = ohlcModel;
        }
        return arr;
    }

}
