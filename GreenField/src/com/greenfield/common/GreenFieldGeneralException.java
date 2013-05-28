package com.greenfield.common;

public class GreenFieldGeneralException extends RuntimeException{


	private static final long serialVersionUID = -7736871863988391481L;
	public GreenFieldGeneralException() {
		super();
	}
	public GreenFieldGeneralException(String message)
	{
		super(message);
	}
	public GreenFieldGeneralException(Throwable th)
	{
		super(th);
	}
	public GreenFieldGeneralException(String message,Throwable th)
	{
		super(message,th);
	}
}
