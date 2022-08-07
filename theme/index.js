import {Button, extendTheme} from "@chakra-ui/react";
import { theme as chakraTheme, ButtonProps } from "@chakra-ui/react";
import {whiten} from '@chakra-ui/theme-tools';

// Configs
import { Typography } from "./typography";
import { ColorPallete } from "./colors";

const OverrideTheme = {
    ...chakraTheme,
    ...Typography,
    ...ColorPallete,
    styles: {
        ...chakraTheme.styles,
        global: {
            ...chakraTheme.styles.global,
            body: {
                color: "#0e0e0d",
                bg: "#fafafa",
            },
        },
    },
};

const theme = extendTheme(OverrideTheme);
export default theme;
