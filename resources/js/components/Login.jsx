import { CardContent, Popover } from "@mui/material";
import React from "react";

export default function Login ({ open, onClose }){
    return (
        <>
            <Popover
                 open={open}
                 onClose={onClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    '& .MuiPopover-paper': {
                    width: 450,
                    },
                }}
            >
                <Card>
                    <CardContent>
                        
                    </CardContent>
                </Card>
            </Popover>
        </>
    )
}
