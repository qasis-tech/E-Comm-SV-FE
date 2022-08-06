<Grid container direction="row" className="login-container">
  <Grid item xs={4} className="image-wrapper">
    <img src={login} alt="login image" />
  </Grid>
  <Grid item xs={8} className="form-section">
    <form onSubmit={handleSubmit(handleLogin)}>
      <Grid item xs={12} marginBottom={3} className="profile-container">
        <h2 fw-bold>LOGIN</h2>
      </Grid>
      <TextField
        id="login-username"
        variant="outlined"
        size="small"
        label="Email"
        {...register("email", {
          required: "Email ID is required",
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Invalid email Id (example@mail.com) ",
          },
        })}
        fullWidth
        error={errors?.email}
      />
      <p>{errors?.email?.message}</p>

      <TextField
        label="Password"
        size="small"
        fullWidth
        type={isVisible ? "text" : "password"}
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Minimum of 8 Charecter",
          },
        })}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setVisible(!isVisible)} edge="end">
                {!isVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        error={errors?.password}
      />
      <p>{errors?.password?.message}</p>

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        marginBottom={2}
      >
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={() => setCheckBox(!isChecked)}
              />
            }
            label="Keep me signed in"
          />
        </Grid>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Forgot password?</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        className="sub-btn"
        justifyContent="space-between"
        marginBottom={2}
      >
        <Grid item>
          <Button className="login-with-button" variant="outlined">
            <GoogleIcon />
            Login with Google
          </Button>
        </Grid>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Button className="login-with-button" variant="contained">
            <FacebookIcon />
            Login with Facebook
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        className="sub-btn"
        justifyContent="space-between"
        marginTop={4}
      >
        <Grid item>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Grid>
        <Grid item className="create-account">
          <a href="">
            Create your account
            <ArrowForwardIcon />
          </a>
        </Grid>
      </Grid>
    </form>
  </Grid>
</Grid>;
