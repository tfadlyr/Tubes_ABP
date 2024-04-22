import React from "react";
import { Box, Typography, TextField, Grid, Paper, Stack, colors, Divider } from '@mui/material'
import '../../css/app.css';
import { auto } from "@popperjs/core";

const Game =() => {
    return (
        <>
            <Box sx={{backgroundColor: 'var(--main-background-color)', maxHeight: auto, padding: 10, g: 10 }}>
                <Stack direction="column" justifyContent="flex-start" spacing={1}>
                    <Typography sx={{color: "var(--main-text-color)", fontSize: 48, fontWeight: 'bold', '&:hover': { cursor: 'pointer'}}}>Counter-Strike 2</Typography>
                    <Typography sx={{color: "var(--main-text-color)"}}>Current price: harga_sekarang (misal 9,000,000)</Typography>
                    <Typography sx={{color: "var(--main-text-color)"}}>Recorded lowest price: harga_terendah (misal 7,000,000)</Typography>
                    <Typography sx={{color: "var(--main-text-color)"}}>On discount: status_diskon (yes/no)</Typography>
                </Stack>
                <Grid container sx={{display: 'flex', justifyContent:'space-between', paddingTop: 2}} spacing={10}>
                    <Grid item xs={6}>
                        <Stack>
                            <Grid item sx={{backgroundColor: 'var(--var1-gamepage)', color: 'var(--main-text-color)',border: '0.5px solid', borderColor: '#2f396f', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 1}}>
                                <Typography variant="h6">Developer</Typography>
                                <Typography variant="h6">Valve Industries</Typography>
                            </Grid>
                            <Grid item sx={{backgroundColor: 'var(--var2-gamepage)', color: 'var(--main-text-color)',border: '0.5px solid', borderColor: '#2f396f', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 1}}>
                                <Typography variant="h6">Publisher</Typography>
                                <Typography variant="h6">Valve Industries</Typography>
                            </Grid>
                            <Grid item sx={{backgroundColor: 'var(--var1-gamepage)', color: 'var(--main-text-color)',border: '0.5px solid', borderColor: '#2f396f', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 1}}>
                                <Typography variant="h6">Supported Systems</Typography>
                                <Typography variant="h6">Wingodswes</Typography>
                            </Grid>
                            <Grid item sx={{backgroundColor: 'var(--var2-gamepage)', color: 'var(--main-text-color)',border: '0.5px solid', borderColor: '#2f396f', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 1}}>
                                <Typography variant="h6">Technologies / Game engine</Typography>
                                <Typography variant="h6">Source 3.0</Typography>
                            </Grid>
                            <Grid item sx={{backgroundColor: 'var(--var1-gamepage)', color: 'var(--main-text-color)',border: '0.5px solid', borderColor: '#2f396f', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 1}}>
                                <Typography variant="h6">Last update</Typography>
                                <Typography variant="h6">teuing iraha</Typography>
                            </Grid>
                            <Grid item sx={{backgroundColor: 'var(--var2-gamepage)', color: 'var(--main-text-color)',border: '0.5px solid', borderColor: '#2f396f', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 1}}>
                                <Typography variant="h6">Release date</Typography>
                                <Typography variant="h6">teu apal</Typography>
                            </Grid>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <img src="https://via.placeholder.com/800x300" alt="Dummy Image"/>
                    </Grid>
                </Grid>
                <Grid sx={{color: 'var(--main-text-color)', display: 'flex', justifyContent:'space-around', marginTop: 5}}>
                    <Grid>
                        <Typography variant="h2">Users rating: 8,7 of 10</Typography>
                    </Grid>
                    <Grid sx={{display: 'flex'}}>
                        <Grid sx={{marginRight: 5}}>
                            <Typography variant="h4">In game</Typography>
                            <Typography variant="h4">809,142</Typography>
                        </Grid>
                        <Typography sx={{fontSize: 50}}>|</Typography>
                        <Grid sx={{marginLeft: 5}}>
                            <Typography variant="h4">In game</Typography>
                            <Typography variant="h4">809,142</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Stack sx={{color:'var(--main-text-color)', marginTop: 5, textAlign:'center'}}>
                    <Grid sx={{backgroundColor: 'var(--headline-game)', borderRadius:'10px 10px 0 0', padding: 2}}>
                        <Typography variant="h4">Game Description</Typography>
                    </Grid>
                    <Grid sx={{backgroundColor: 'var(--details-game)', padding: 5, maxHeight: auto}}>
                        <Typography variant="h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore ipsum modi adipisci ea incidunt laborum aliquam cupiditate est eligendi, accusamus tenetur, vitae expedita similique qui debitis, ducimus saepe sint ullam eius quidem molestiae aperiam fugiat animi? Numquam officia officiis non sunt saepe reprehenderit nulla labore iure. Fuga libero placeat animi accusantium recusandae. Aperiam eius tenetur quod ratione unde possimus dolor cupiditate sit! Sint eos doloribus corrupti assumenda blanditiis magni eius, error magnam quisquam. Nesciunt distinctio deserunt quisquam quam fugit temporibus impedit at! Adipisci eligendi sed, quaerat rerum atque vitae dolores fugit iure labore sint quasi, magnam porro saepe sunt doloremque praesentium aliquid dolor tenetur. Accusamus beatae culpa, eligendi odio corporis aliquam tempora maiores libero rem magnam eos dignissimos. Fuga perferendis magni quod neque expedita, dolorum ratione enim cupiditate! Voluptas nihil autem dolores repellendus doloribus ad delectus quae perspiciatis aliquid excepturi, neque voluptates officia magnam cum et, quam quod molestias, nostrum minus! Ea, dicta labore ipsam repudiandae qui architecto enim accusamus autem quo rerum nihil maiores. Eligendi sunt, fugiat provident animi accusantium tempore quod. Dolor incidunt beatae aspernatur sapiente repudiandae vero. Iste nihil reprehenderit nostrum, earum soluta debitis, accusamus dolore repellat quidem nisi, enim rem dicta cum ad dolorem corporis eveniet possimus perferendis ipsa. Unde consequuntur, porro tenetur ducimus quam non aliquam omnis dolorem, ab at inventore fuga ipsa similique ipsam id magni quod temporibus harum ratione provident rem corporis ipsum dolore! Quibusdam, quae reiciendis maiores ex praesentium eius quos dolorum dolor? Totam dicta voluptatibus cupiditate ullam dolorum fugiat beatae perferendis, distinctio veniam esse nesciunt nisi, incidunt odio recusandae earum fuga? Aliquam eaque quas veritatis quia, nisi ratione laborum similique nostrum itaque. Mollitia animi distinctio, officia, dolore vel consequuntur nesciunt exercitationem ea maxime libero eius veniam, fuga numquam. Dignissimos magnam perferendis soluta quam. Deleniti soluta assumenda dolor hic quae enim veniam, eum delectus incidunt commodi repellendus nulla unde, corporis officia libero et molestiae adipisci magnam ipsa rem temporibus dignissimos quia quas ullam. Nulla exercitationem voluptatum facilis, eos porro id obcaecati eius vero voluptatem enim voluptas, deserunt laboriosam aspernatur optio ullam officia doloribus magni illum facere consectetur assumenda? Molestias, repellat! Distinctio minima accusamus, adipisci quae unde vel quis optio eius placeat reiciendis eaque dicta est vitae sit quasi? Architecto ipsam dolorem, iusto ad beatae atque numquam illum impedit. Cumque inventore, assumenda nisi iure reiciendis id laudantium perferendis. Ea quos dolorum perferendis? Animi debitis enim, aspernatur beatae error quasi autem sint magni tempore illo quae modi praesentium corrupti laboriosam quam quia dolore illum sapiente ullam? Vel laboriosam officia est nam dolore quam voluptatibus vero cum, eum repellat tenetur harum reprehenderit beatae molestias qui atque ea sit odio quas cumque quos amet doloribus. Ullam quas optio quia veniam vitae unde quis provident, saepe inventore deserunt odit velit eveniet nam! Architecto repellendus odit, incidunt natus omnis fugit. Corrupti minus quia delectus vero facere in repellat. Odit tempora saepe architecto culpa ab vitae ullam perspiciatis nostrum quas aliquid odio accusamus velit labore molestias aperiam, voluptatibus sequi maiores! Rerum velit excepturi itaque temporibus iste ratione deleniti harum, qui vitae eos dolorem ipsum omnis tempore assumenda quidem architecto laborum quo. Minima ipsum, error reiciendis possimus excepturi incidunt. Modi nulla omnis veniam fugit ad nihil aut ullam? Illo dicta nihil, tenetur enim non, doloribus minima adipisci sint maxime ipsam libero rerum? Vitae rerum, officiis asperiores dolorum pariatur assumenda nihil magni autem debitis omnis soluta, in dolorem! Quas voluptas, officiis consequuntur ex amet ducimus excepturi totam, illum numquam dicta adipisci deleniti nesciunt laborum porro odit reiciendis laboriosam maiores esse dolores! Corrupti neque sint nulla laudantium culpa atque dignissimos fuga fugiat expedita eaque sequi, magnam dolores nisi, delectus explicabo non veritatis consequuntur. Dolorum aliquam dicta tempora sequi dignissimos at in ea perspiciatis temporibus, sed mollitia iure consequuntur vel aut, nulla reprehenderit unde distinctio incidunt ullam eaque. Blanditiis, est dignissimos culpa illum similique eveniet exercitationem expedita, quam corrupti facilis, quia id libero numquam ipsam tempora fugit voluptas iusto. Illum sapiente eveniet exercitationem cumque minus excepturi praesentium corrupti modi animi laborum illo aliquid voluptatum eligendi nulla, hic velit, deserunt iure. Quae, assumenda? Atque, unde animi nostrum, nisi totam labore dolor voluptatem corporis numquam consequatur obcaecati illum eum placeat, repudiandae quisquam iste enim aspernatur eaque repellendus facere error. Dolorem veritatis eveniet error ut eligendi eius ex quibusdam est iste dignissimos cupiditate ea maiores, dolor quas asperiores doloremque magni nisi quod eum! Molestias nobis accusantium hic assumenda ullam dicta eius maiores, ea cupiditate. Dolorem nam repellendus quam omnis minus nihil quas iure dolorum consequatur labore reprehenderit asperiores, temporibus voluptatum necessitatibus laborum eligendi consequuntur incidunt sapiente libero dolores ratione quo sint a obcaecati? Voluptate error voluptatem sequi, eaque possimus neque saepe? Quae laboriosam, dignissimos officia dolores atque voluptates, corrupti quibusdam modi beatae quidem quaerat eveniet sint placeat debitis distinctio. Quasi commodi asperiores quod iste tempora, consectetur illo pariatur, recusandae vel sit quidem dolores libero, aut unde id dolor repellendus sunt reiciendis numquam voluptatem quas necessitatibus in modi esse! Aspernatur tempora non porro culpa exercitationem nobis similique ipsum, deleniti fugiat harum, eligendi vitae recusandae temporibus ipsam ea maiores amet corrupti dolor libero ullam distinctio nostrum quo obcaecati. Quae, fugit earum architecto nobis odit beatae eaque a quos, magnam aut deserunt illum labore sapiente aperiam dolorem ea sequi quibusdam pariatur dolor tempore asperiores. Animi dolorum iste ratione. Esse, voluptatem mollitia, blanditiis inventore placeat eligendi atque eum numquam magni nihil perspiciatis eius saepe molestias cupiditate dolore, labore culpa. Quas eos eligendi consequuntur pariatur nisi. Voluptates minima quis consequatur impedit vitae, asperiores illo nemo iure est pariatur rem totam labore perferendis architecto adipisci accusamus. Fuga cumque at minima quia placeat numquam dolore nisi odit. Voluptas suscipit id nemo aperiam sed ratione molestias? Illum impedit modi inventore atque? Consequuntur, aliquam deleniti labore doloribus iure nobis autem, eveniet quibusdam, ut veritatis consequatur fugiat praesentium! Recusandae nam rem dolorem eligendi iure assumenda molestias similique quod molestiae tenetur veritatis accusantium, rerum laborum quibusdam dolores deleniti incidunt aliquid esse alias magnam porro, reiciendis expedita nostrum? Nulla provident eum laudantium eos mollitia numquam necessitatibus tenetur recusandae quis at consequuntur laboriosam quia nobis, autem aut! Iusto?</Typography>
                    </Grid>
                </Stack>
            </Box>
        </>
    )
}

export default Game;
