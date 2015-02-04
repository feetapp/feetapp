package com.feetapp.mvc.controller;

import com.feetapp.mvc.model.OhlcModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class OhlcController {

    private static final Logger LOG = LoggerFactory.getLogger(OhlcController.class);

    @RequestMapping(value = "/rest/ohlc", method = RequestMethod.GET)
    public
    @ResponseBody
    OhlcModel getDummyEmployee() {
        LOG.info("Start");
        return null;
    }

}
